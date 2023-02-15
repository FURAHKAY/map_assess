import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=19TnNcGxiwr4R5z-mitm23_h7yxlj3NE&ehbc=2E312F" width="640" 
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d212008.22434225737!2d18.384889728746845!3d-33.87346369360807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smcdonalds%20cape%20town!5e0!3m2!1sen!2sza!4v1676416767535!5m2!1sen!2sza" 
        width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default App;
