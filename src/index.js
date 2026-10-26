
import React from "react";
import ReactDOM from "react-dom/client";
import Presentation from "./components/Presentation";
import PresentationClasse from "./components/PresentationClasse";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Presentation>
      <p>Contenu enfant</p>
    </Presentation>

    <PresentationClasse>
      <p>Contenu enfant</p>
    </PresentationClasse>
  </React.StrictMode>
);

