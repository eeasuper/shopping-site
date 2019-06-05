import React ,{useState}from 'react';
import axios from 'axios';
import './ProductPage.css';
import {withRouter,Link} from 'react-router-dom';
import productList from '../seed/AllProducts';
import ReactImageMagnify from 'react-image-magnify';
import SimpleSnackbar from '../services/SimpleSnackbar';
/*If this app is connected to the backend, it should make a search query of the ID of the product in the URL instead of using the productList variable.*/

const ProductPage = withRouter(({location,...props})=>{
  const [openSb, setOpenSb] = React.useState(false);
  const [sbMessage,setSbMessage] = React.useState("");
  // const [product, setProduct] = React.useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const productId = parseInt(location.search.substring(location.search.lastIndexOf("=")+1, location.search.length));
  // const url = "http://localhost:8080/product/"+productId;
  // const pictureURL = "http://localhost:8080/product/"+productId+"/thumbnail";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     const result = await axios.get(url);
      
  //     setProduct(result.data);
  //     setIsLoading(false);
  //   };
    
  //   fetchData();
  // },productId);

  const product = productList.find((val,ind)=>{
    return val.id === productId;
  })
  const descriptionUl = product.description_ul.map((val,ind)=>{
    return (
      <li key={ind}>{val}</li>
    )
  });

  function openSnackbar(message){
    setOpenSb(true);
    if(message){
      setSbMessage(message)
    }
  }

  function handleCloseSnackbar(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSb(false);
  }

  function handleAddToCart(e){
    e.persist();
    let cart = JSON.parse(localStorage.getItem("cart"));
    let productId = parseInt(e.target.dataset.product);
    // const url = "http://localhost:8080/cart/";

    // if(!cart){
    //   let newCart = {
    //     [productId]: {
    //       quantity: 1
    //     }
    //   };
    //   localStorage.setItem("cart",JSON.stringify(newCart));
    // }else{
    //   let product = Object.keys(cart).filter((v)=>{
    //     return parseInt(v) === productId;
    //   })[0];
    //   if(product){
    //     /*function to increase quantity when clicked more than once.*/
    //     // cart[product].quantity += 1;
    //   }else{
    //     cart[productId] = {
    //       quantity: 1
    //     }
    //   }
    //   localStorage.setItem("cart",JSON.stringify(cart));
    // }
    props.addToCart({
      productId: productId,
      quantity: 1
    }).then((response)=>{
      console.log(response);
      if(response){
        openSnackbar("Item has been added to cart");
      }
    }).catch((errorMessage)=>{
      if(errorMessage){
        openSnackbar(errorMessage);
      }
    })
  }

  return(
    <section className="page-width product-container">
      <div className="product-image">
        <ReactImageMagnify {...{
          smallImage:{
            alt: product.name,  
            src: product.picture,
            isFluidWidth: true
          },
          largeImage:{
            src: product.picture,
            width: 800,
            height: 800
          },
          enlargedImageContainerClassName:'enlarged-image-con',
        }}/>
      </div>
      <div className="product-description">
        <h1>{product.name}</h1>
        <p>₩{product.price}</p>
        <form disabled>
          <button type="button" className="btn" onClick={handleAddToCart} data-product={product.id}>
            ADD TO CART
          </button>
        </form>
        <div className="product-description-2">
          <p>{product.description}</p>
          <ul>
            {descriptionUl}
          </ul>
        </div>
        <div className="social-icons">
          <div data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
              <svg aria-hidden="true" focusable="false" role="presentation" className="s-icon icon-facebook" viewBox="0 0 20 20"><path fill="#444" d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"></path></svg>
              <span>SHARE</span>
            </a>
          </div>
          <div>
            <a className="icon-twitter" href="https://twitter.com/intent/tweet?text=Hello%20world" data-size="large">
              <svg aria-hidden="true" focusable="false" role="presentation" className="s-icon icon-twitter" viewBox="0 0 20 20"><path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"></path></svg>
              <span>TWEET</span>
            </a>
          </div>
          <div>
            <a className="icon-pin" href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-custom="false">
              <svg aria-hidden="true" focusable="false" role="presentation" className="s-icon icon-pinterest" viewBox="0 0 20 20"><path fill="#444" d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z"></path></svg>
              <span>PIN IT</span>
            </a>
          </div>
        </div>
      </div>
      <SimpleSnackbar open={openSb} handleClose={handleCloseSnackbar} message={sbMessage}/>
    </section>
  )
});

export default ProductPage;