export default function ProductCard(props) {
  console.log(props);
  return (
    <div
      className="card product-card p-10"
      onClick={() => props.onClick(props.product)}
    >
      <div className="card-body">
        {props.product.Name ? props.product.Name : "Default"}
      </div>
    </div>
  );
}
