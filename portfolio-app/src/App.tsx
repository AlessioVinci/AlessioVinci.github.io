import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Card from './Card.tsx';

function App() {

  return (
    <>
      <Header />
      <div className='card-container'>
        <Card imgSrc="Jhin.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lactus est Lorem ipsum dolor sit amet." />
        <Card imgSrc="Katarina.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diamtet cldiam voluergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
        <Card imgSrc="Sona.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet,  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut re magna aliquyam erat, sed diam vol." />
        <Card imgSrc="Jhin.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lactus est Lorem ipsum dolor sit amet." />
        <Card imgSrc="Katarina.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diamtet cldiam voluergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
        <Card imgSrc="Sona.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet,  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut re magna aliquyam erat, sed diam vol." />
        <Card imgSrc="Jhin.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lactus est Lorem ipsum dolor sit amet." />
        <Card imgSrc="Katarina.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diamtet cldiam voluergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
        <Card imgSrc="Sona.jpg" title="Alessio Vinci" description="Lorem ipsum dolor sit amet,  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut re magna aliquyam erat, sed diam vol." />
      </div>
      <Footer />
    </>
  );
}

export default App
