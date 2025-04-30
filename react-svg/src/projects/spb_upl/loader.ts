import ModelInterface from "../../core/models/ModelInterface";
import { ObjectDef } from "../../core/project/object_def";
import Project from "../../core/project/project";
import ProjectInterface from "../../core/project/project_interface";
import { Prototype } from "../../core/project/prototype";
import { models_map } from "./all_models";

export function load(project_data: any): ProjectInterface {
  // load protos
  const protos_list = load_protos(project_data["protos"]);
  const protos_map = map_protos(protos_list);

  // load objects
  const raw_objects = read_objects(project_data["objects"], protos_map);

  // make project
  const pro = new Project(protos_map);

  const objects = load_objects(pro, raw_objects);
  pro.set_objects(objects);

  return pro;
}

function load_objects(
  project: ProjectInterface,
  objects: ObjectDef[]
): ModelInterface[] {
  return objects
    .filter((obj_data) => obj_data["name"] !== "root")
    .map((obj_data) => {
      const model = create_obj(project, obj_data);
      return model;
    });

  //   return [];
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

function load_protos(raw_protos: any[]): Prototype[] {
  return raw_protos.map((proto: any) => {
    return {
      proto_id: proto["proto_id"],
      name: proto["name"],
      description: proto["description"],
      icon: proto["icon"],
      attrs: proto["attrs"].map((pattr: any) => {
        return {
          attr_id: pattr["attr_id"],
          name: pattr["name"],
          sname: pattr["sname"],
          vtype: pattr["vtype"],
          description: pattr["description"],
        };
      }),
    };
  });
}

function map_protos(protos_list: Prototype[]): { [key: string]: Prototype } {
  return protos_list.reduce(
    (map: { [key: string]: Prototype }, proto: Prototype) => {
      map[proto.proto_id] = proto;
      return map;
    },
    {}
  );
}

function read_objects(
  raw_objects: any[],
  protos_map: { [key: string]: Prototype }
): ObjectDef[] {
  return raw_objects.map((robj) => {
    const proto_name = protos_map[robj["proto_code"]]?.name || "";

    let attrs_values = Object.keys(robj["attrs_values"]).reduce(
      (map: { [key: number]: any }, str_attr_id: string) => {
        map[parseInt(str_attr_id)] = robj["attrs_values"][str_attr_id];
        return map;
      },
      {}
    );

    return {
      description: robj["description"],
      name: robj["name"],
      obj_id: robj["obj_id"],
      plc_id: robj["plc_id"],
      proto_code: robj["proto_code"],
      proto_name,
      sname: robj["sname"],
      sys_id: robj["sys_id"],
      tree_level: robj["tree_level"],
      tree_lk: robj["tree_lk"],
      tree_rk: robj["tree_rk"],
      //   possible_values: [];
      //   plc_observers: [];
      attrs_values,
    };
  });
}

function create_obj(
  project: ProjectInterface,
  obj_def: ObjectDef
): ModelInterface {
  const ModelCls = models_map[obj_def.proto_name];

  if (!ModelCls) {
    throw new Error("no class for proto: " + obj_def.proto_name);
  }

  return new ModelCls(project, obj_def.sys_id);
}
