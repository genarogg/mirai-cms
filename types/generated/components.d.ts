import type { Schema, Struct } from '@strapi/strapi';

export interface EspesificacionesEspecificaciones
  extends Struct.ComponentSchema {
  collectionName: 'components_espesificaciones_especificaciones';
  info: {
    description: '';
    displayName: 'Especificaciones';
    icon: 'bulletList';
  };
  attributes: {
    fit: Schema.Attribute.Enumeration<
      [
        'Regular',
        'Slim',
        'Relaxed',
        'Oversized',
        'Skinny',
        'Loose',
        'Straight',
        'Tapered',
        'Bootcut',
        'Wide-leg',
        'Athletic',
        'Classic',
      ]
    >;
    forro: Schema.Attribute.Enumeration<['si', 'no']>;
    grosor: Schema.Attribute.Enumeration<
      [
        'Fino',
        'Medio',
        'Grueso',
        'Extrafino',
        'Semigrueso',
        'Ultra grueso',
        'Ligero',
        'Pesado',
      ]
    >;
    Materiales: Schema.Attribute.Enumeration<
      [
        'Algod\u00F3n 100%',
        'Algod\u00F3n org\u00E1nico 100%',
        'Lino 100%',
        'Lana 100%',
        'Lana merino 100%',
        'Cachemira 100%',
        'Seda 100%',
        'Bamb\u00FA 100%',
        'Yute 100%',
        'C\u00E1\u00F1amo 100%',
      ]
    >;
    transparency: Schema.Attribute.Enumeration<
      [
        'Opaco',
        'Semi-opaco',
        'Ligeramente transparente',
        'Transparente',
        'Ultra transparente',
        'Transparencia estrat\u00E9gica',
        'Transparencia por capas',
        'Transparencia con efecto mojado',
        'Transparencia con brillo',
      ]
    >;
  };
}

export interface TallaTalla extends Struct.ComponentSchema {
  collectionName: 'components_talla_tallas';
  info: {
    description: '';
    displayName: 'talla';
    icon: 'bulletList';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      [
        'Negro #000000,',
        'Gris muy oscuro #1a1a1a,',
        'Gris oscuro #2f2f2f,',
        'Gris #808080,',
        'Gris claro #d3d3d3,',
        'Blanco #ffffff,',
        'Rojo oscuro #8b0000,',
        'Rojo #ff0000,',
        'Rojo claro #ff6666,',
        'Salm\u00F3n #ffa07a,',
        'Fucsia #ff0080,',
        'Rosa #ff00ff,',
        'Rosa claro #ffc0cb,',
        'Magenta #ff00ff,',
        'Naranja oscuro #ff8c00,',
        'Naranja #ffa500,',
        'Amarillo #ffff00,',
        'Amarillo claro #ffff80,',
        'Dorado #ffd700,',
        'Beige #f5f5dc,',
        'Crema #fffdd0,',
        'Marr\u00F3n oscuro #654321,',
        'Marr\u00F3n #8b4513,',
        'Marr\u00F3n claro #cd853f,',
        'Cobre #b87333,',
        'Caqui #c3b091,',
        'Verde oscuro #006400,',
        'Verde #008000,',
        'Verde claro #90ee90,',
        'Verde lima #00ff00,',
        'Verde menta #98ff98,',
        'Verde esmeralda #50c878,',
        'Verde oliva #808000,',
        'Verde musgo #8a9a5b,',
        'Cian #00ffff,',
        'Turquesa #40e0d0,',
        'Celeste #87ceeb,',
        'Azul claro #add8e6,',
        'Azul #0000ff,',
        'Azul marino #000080,',
        'Azul oscuro #00008b,',
        'Azul \u00EDndigo #4b0082,',
        'Azul pizarra #6a5acd,',
        'Violeta #ee82ee,',
        'P\u00FArpura #800080,',
        'Morado oscuro #9400d3,',
        'Lila #c8a2c8,',
        'Lavanda #e6e6fa,',
        'Granate #800000,',
        'Plateado #c0c0c0,',
      ]
    > &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stock: Schema.Attribute.Integer & Schema.Attribute.Required;
    talla: Schema.Attribute.Enumeration<['XS', 'S', 'M', 'L', 'XL']> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'espesificaciones.especificaciones': EspesificacionesEspecificaciones;
      'talla.talla': TallaTalla;
    }
  }
}
