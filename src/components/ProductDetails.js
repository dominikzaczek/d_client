export default function ProductDetails(props) {
  console.log(props.family);
  return (
    <div className="marginex">
      <img
        src={
          "https://quizzical-elbakyan.77-68-115-165.plesk.page" +
          props.product.image.url
        }
        width="100%"
        alt={props.product.Name}
        className="mtop-10"
      />
      {props.product.description ? (
        <div class="card pad-10 mtop-10">
          <div class="card-body">
            <h3>Description</h3>
            {props.product.description}
          </div>
        </div>
      ) : null}
      <div class="card pad-10 mtop-10">
        <div class="card-body p-10">
          <h3>Notes</h3>
          {props.product.notes}
        </div>
      </div>
      <div class="card pad-10 mtop-10">
        <div class="card-body p-10">
          <h3>Descriptive words</h3>
          {props.product.words
            ? props.product.words
            : "We are working on that!"}
        </div>
      </div>
      {props.family ? (
        <div class="card pad-10 mtop-10">
          <div class="card-body p-10">
            <h3>Other {props.product.family.name}</h3>
            {props.family.data.perfumes.map((perfume) => {
              return (
                <div class="card pad-10 mtop-10">
                  <div class="card-body p-10">{perfume.Name}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {props.product.lifestyle_products ? (
        <div class="card pad-10 mtop-10">
          <div class="card-body p-10">
            <h3>Recommended Products</h3>
            {props.product.lifestyle_products.map((lifestyle) => {
              console.log(lifestyle);
              return (
                <div class="card m-2">
                  <img
                    src={
                      "https://quizzical-elbakyan.77-68-115-165.plesk.page" +
                      lifestyle.picture.url
                    }
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{lifestyle.name}</h5>
                    <p class="card-text">{lifestyle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
