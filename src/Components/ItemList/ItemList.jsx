import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import Category from "../Category/Category";

function ItemList({ products }) {

    return (
        <>
      <Category />
      <Flex>
        {products.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            detalle={producto.detalle}
            imagen={producto.imagen}
            category={producto.category}
            id={producto.id}
          />
        ))}
        ;
      </Flex>
    </>
  );
}

export default ItemList;