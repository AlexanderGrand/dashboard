# Dashboard V1.0

Implementar graficos en un dashboard con un solo componente unico, y usar Boostrap como maquetador, para ello, hay que importar el componente "Dashboard ",el cual encapsula la logica de otras librerias y manejo de props.

La data es estatica , pero puede ser editado a conveniencia para ser alimentados desde un server remoto.

https://alexandergrand.github.io/dashboard/

```JSX
import Dashboard from "./component/deploy/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/dash.css";

function App() {
  const dataSimpleBar = [
    ["ATTENDANCE", "COUNTING", { role: "style" }],
    ["Woman", 150, "#b87333"], // RGB value
    ["Men", 90, "silver"], // English color name
    ["Children", 215, "gold"],
    ["Seniors", 60, "color: #e5e4e2"], // CSS-style declaration
  ];
  const dataGroupBar = [
    ["YEAR", "GATS", "DOGS", "PARROTS"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  const dataPie = [
    ["WORKOUTS DAYS", "TIME"],
    ["Monday", 1.5],
    ["Wednesday", 1.2],
    ["Thursday", 1],
    ["Friday", 1.3],
    ["Saturday", 2],
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>DashBoard</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <Dashboard
              type={"simpleBar"}
              data={{ data: dataSimpleBar, title: "EVENT ATTENDANCE" }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Dashboard
              type={"pie"}
              data={{ data: dataPie, title: "WORKOUTS OF THE WEEK" }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Dashboard
              type={"groupBar"}
              data={{ data: dataGroupBar, title: "ADOPTIONS" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
```
