|---|---|
| id | number |
| destino | string |
| titulo | string |
| presupuesto | number |
| fecha_inicio | Date |
| fecha_final | Date |
| gastos | Gasto[] |
| actividades | Actividad[] |

## Actividad

| Campo       | Tipo   |
| ----------- | ------ |
| id          | number |
| nombre      | string |
| precio      | number |
| fecha       | Date   |
| hora        | Date   |
| descripcion | string |

## Gasto

| Campo       | Tipo      |
| ----------- | --------- |
| id          | number    |
| nombre      | string    |
| descripcion | string    |
| precio      | number    |
| tipo        | TipoGasto |

## TipoGasto

Valores permitidos:

- actividad
- ocio
- transporte
- alimentos
- recuerdos
