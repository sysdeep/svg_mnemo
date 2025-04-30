import BaseModel from "../../core/models/BaseModel";
import ModelInterface from "../../core/models/ModelInterface";
import Project from "../../core/project/project";
import ProjectInterface from "../../core/project/project_interface";
import { ModelInterfaceConstructor } from "./all_models";

export function load(): ProjectInterface {
  const pro = new Project();

  return pro;
}

function load_objects(
  objects: any[],
  protos: ModelInterfaceConstructor[]
): ModelInterface[] {
  //
  //   const protos_map = protos.reduce((map, p) => {
  //     map[p.PROTO_NAME] = p;
  //     return map;
  //   }, {});

  const protos_map = new Map(protos.map((i) => [i.PROTO_NAME, i]));
  // const protos_map: {[key: string], typeof BaseModel} = {};
  //   for (let proto_class of protos) {
  //     protos_map[proto_class.PROTO_NAME] = proto_class;
  // }

  //   return objects
  //     .filter((obj_data) => obj_data["name"] !== "root")
  //     .map((obj_data) => {
  //       //   const sys_id = obj_data["sys_id"]; // sys_id
  //       const proto_code = obj_data["proto_code"]; // proto code
  //       // obj_model 	= None
  //       const proto_class = protos_map.get(proto_code);
  //       //   let pcls = protos.filter((p) => p.PROTO_NAME === proto_code);
  //       //   let ppp = pcls[0];
  //       // new ppp(Project, )
  //     });

  return [];
  /*
    #--- список неиспользованных классов прототипов - для отслеживания лишних
    full_protos_list = list(proto_models_dict.keys())
    full_protos_list.remove("Base")						# сразу избавляемся от Base


    cache_sysid_objects		= {}		# карта провереных объектов для поиска дубликатов sys_id: name
    bad_sysid_objects 		= []		# список плохих объектов sys_id, name
    bad_found_proto_class 	= []		# список прототипов, которые не определены в проекте
    bad_no_proto_class		= []		# список объектов, у которых не задан прототип

    for obj in objects_array:

        #--- отсеиваем корень дерева из json
        if obj["name"] == "root":
            continue

        sys_id 		= obj["sys_id"]				# sys_id
        proto_code 	= obj["proto_code"]			# proto code
        obj_model 	= None


        #--- проверка на дубликаты sys_id(ошибки заполнения в конструкторе)
        if sys_id in cache_sysid_objects.keys():
            first_name = cache_sysid_objects[sys_id]
            bad_sysid_objects.append(sys_id + ": " + obj["name"] + " <-> " + first_name)
        else:
            cache_sysid_objects[sys_id] = obj["name"]




        #--- проверка и создание модели на основе прототипа
        if proto_code:
            proto = project.protos.get(proto_code)							# находим прототип

            #--- проверка присутствия прототипа по заданному id
            # TODO: - доделать!!!
            if proto is None:
                log.warning("не найден класс прототипа по proto_code: " + proto_code)
                continue

            proto_class_model = proto_models_dict.get(proto["name"])		# получаем класс модели по прототипу

            #-- если класс найден - создаём модель - иначе создаём на основе базового
            if proto_class_model:
                # log.debug("найден класс модели прототипа: "+proto["name"])

                #--- удаляем элемент из списка неиспользуемых(мы же его используем?)
                if proto["name"] in full_protos_list:
                    full_protos_list.remove(proto["name"])

                obj_model = loader_object.create_model_proto(obj, proto, proto_class_model)
                obj_model.proto_is_defined = True							# выставляем флаг, что файл прототипа найден

                #--- проверка класса прототипа и данных прототипа(2019.07.12)
                if proto["name"] != obj_model.PROTO_NAME:
                    log.warning("несоответствие протитипа и класса прототипа: {} <-> {}".format(proto["name"], obj_model.PROTO_NAME))

            #--- класс прототипа не найден в доступных - создаём на основе базового и сохраняем в списке плохих
            else:
                log.warning("не найден класс модели прототипа: " + proto["name"])
                proto_class = proto_models_dict.get("Base")

                # obj_model = loader_object.create_model_base(obj, proto_class)
                # 2018.04.12 - динамическое создание объекта на основе базового прототипа
                # объект полностью рабочий, только без настроек и методов
                obj_model = loader_object.create_model_proto(obj, proto, proto_class)
                obj_model.proto = proto["name"]											# принудительно присваиваем название прототипа
                obj_model.proto_is_defined = False										# выставляем флаг, что файл прототипа не установлен
                bad_found_proto_class.append(proto["name"])

        else:
            log.error("в исходных данных объекта не задан прототип: " + obj["name"])
            proto_class = proto_models_dict.get("Base")
            obj_model = loader_object.create_model_base(obj, proto_class)
            bad_no_proto_class.append(obj["name"])


        #--- дополняем модель статичными данными
        #-- дерево
        obj_model.tree_lk 		= obj["tree_lk"]
        obj_model.tree_rk 		= obj["tree_rk"]
        obj_model.tree_level 	= obj["tree_level"]

        #-- доп данные
        obj_model.obj_id 		= obj["obj_id"]
        obj_model.plc_id 		= obj["plc_id"]
        obj_model.description 	= obj["description"]

        #-- ссылка на себя
        obj_model.parent 		= project


        # print(obj_model)

        #--- добавляем модель в свой список и кэш
        project.objects[sys_id] = obj_model
        # self.sobjects[obj["name"]] = sys_id



    #--- дубликаты sys_id
    if len(bad_sysid_objects) > 0:
        log.error("обнаружены дубликаты по sys_id")
        for line in bad_sysid_objects:
            log.error("\t" + line)

        log.error("дальнейшая работа приложения невозможна")
        sys.exit(1)




    log.debug("загружено: {}".format(len(project.objects)))


    #--- лишние прототипы
    if len(full_protos_list) > 0:
        log.debug("обнаруженны неиспользуемые прототипы:")
        for i in full_protos_list:
            log.debug("\t -> \t" + i)


    #--- неопределённые прототипы
    if len(bad_found_proto_class) > 0:
        log.warning("обнаружены неопределённые прототипы:")
        for l in list(set(bad_found_proto_class)):
            log.warning("\t -> \t" + l)


    #--- объекты без прототипов
    if len(bad_no_proto_class) > 0:
        log.warning("обнаружены объекты без прототипов:")
        for l in list(set(bad_no_proto_class)):
            log.warning("\t -> \t" + l)



    */
}
