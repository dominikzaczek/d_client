import ProductCard from "./ProductCard";

export default function ProductList(props) {
  return (
    <div>
      <h2 className="m-4">Fragrances</h2>
      {props.products.map((item) => {
        return (
          <ProductCard
            product={item}
            onClick={(item) => props.onAssignItem(item)}
          />
        );
      })}
    </div>
  );
}
