import type { Schema, Attribute } from '@strapi/strapi';

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    article: Attribute.String;
    diameter: Attribute.String;
    length: Attribute.String;
    weight: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'table.table': TableTable;
    }
  }
}
