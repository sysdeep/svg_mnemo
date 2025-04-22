import BaseModel from "../core/models/BaseModel";

export type AdapterHandler<Type> = (value: Type) => void;

export type AdapterHandlersMap = Map<number, AdapterHandler<any>>;

export function mount_adapter(
  model: BaseModel,
  handlers_map: AdapterHandlersMap
) {
  // init current state
  for (const [key, entry] of handlers_map.entries()) {
    entry(model.get_attr(key)?.get_value());
  }

  // connect
  model.connect_changed((attr_id: number) => {
    let h = handlers_map.get(attr_id);
    if (h) {
      h(model.get_attr(attr_id)?.get_value());
    }
  });
}
