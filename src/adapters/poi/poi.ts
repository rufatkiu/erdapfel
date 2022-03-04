/**
 * simple Poi helper
 */
import type { components } from '../../../@types/schema';

export const POI_TYPE = 'poi';

type TPoi = {
  id?: string;
  name?: string;
  type?: string;
  latLon?: components['schemas']['Coord'];
  className?: string;
  subClassName?: string;
  bbox?: [number, number, number, number];
};

export default class Poi {
  id: TPoi['id'];
  name: TPoi['name'];
  type: TPoi['type'];
  latLon: TPoi['latLon'];
  className: TPoi['className'];
  subClassName: TPoi['subClassName'];
  bbox: TPoi['bbox'];

  constructor(
    id: TPoi['id'],
    name: TPoi['name'],
    type: TPoi['type'],
    latLon: TPoi['latLon'],
    className: TPoi['className'],
    subClassName: TPoi['subClassName'],
    bbox?: TPoi['bbox']
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.latLon = latLon;
    this.className = className;
    this.subClassName = subClassName;
    this.bbox = bbox;
  }

  static deserialize(raw) {
    const { id, name, type, latLon, className, subClassName, bbox } = raw;
    return new Poi(id, name, type, latLon, className, subClassName, bbox);
  }
}
