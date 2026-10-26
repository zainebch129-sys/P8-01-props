
import { Component } from "react";

class PresentationClasse extends Component {
  render() {
    const personne = {
      nom: "chokairy",
      prenom: "zaineb",
      age: 25
    };

    const diplomes = ["Baccalauréat", "Licence", "Master"];

    return (
      <div>
        <h1>Présentation de la personne</h1>

        <p>Nom : {personne.nom}</p>
        <p>Prénom : {personne.prenom}</p>
        <p>Âge : {personne.age} ans</p>

        <h2>Diplômes</h2>
        <ul>
          {diplomes.map((diplome, index) => (
            <li key={index}>{diplome}</li>
          ))}
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default PresentationClasse;


