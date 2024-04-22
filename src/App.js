import logo from './logo.svg';
import './App.css';
import Header from './componets/Header'
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './componets/product';
import products from './componets/ProductData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  let heading = 'Welcome To WscubeTech';
  return (
    <div className="App">
      <Header headingTitle = {heading}></Header>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
          {/* <Product /> */}
            {
              products.map((v,i) => {
                return (
                  <>
                    <div className="col-md-3 mb-3">
                      <Card  style={{height:'450px'}}>
                        <Card.Img variant="top" src={v.thumbnail} height={200} />
                        <Card.Body>
                          <Card.Title>{v.title}</Card.Title>
                          <Card.Text>
                            {v.description}
                          </Card.Text>
                          <Button variant="primary">Rs.{v.price}</Button>
                        </Card.Body>
                      </Card>
                      
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
     


    </div>
  );
}
export default App;
