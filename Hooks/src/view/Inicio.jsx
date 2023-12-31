import "../view/Inicio.scss";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <header className="headerI">
      <div>
        <h1>VAMOS COMEÇAR! POR FAVOR ACESSE OS TRABALHOS COM HOOKS!!</h1>
      </div>
        <section>
          <button className="state" id="state">
            <Link to={`Usestate`}> useState </Link>
          </button>

          <button className="effect" id="effect">
            <Link to={`Useeffect`}> useEffect </Link>
          </button>

          <button>
            <Link to={`Usememo`} id="memo"> useMemo </Link>
          </button>
          <button>
            <Link to={`Usereducer`}id="usereduc" >UseReducer</Link>
          </button>
        </section>
    </header>
  );
}

export default Inicio;
