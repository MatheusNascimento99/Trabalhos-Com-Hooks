
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <header className="header">
      <div>
        <h1>VAMOS COMEÇAR! POR FAVOR ACESSE OS TRABALHOS COM HOOKS!!</h1>

        <button>
          <Link to={`Usestate`}> useState </Link>
        </button>,
        <button>
          <Link to={`Useeffect`}> useEffect </Link>
        </button>,
        
        <button>
          <Link to={`Usememo`}> useMemo </Link>
        </button>,
        <button>
            <Link to={`Usecallback`} >Usecallback</Link>
        </button>
      </div>
    </header>
  );
}

export default Inicio;
