import React, { useEffect } from 'react';
import axios from 'axios';
import "./styles.css";

const Records = () => {

    useEffect(() => {
        console.log("Componente inciado");
    },[]);


    return (
    <div className="page-container">
        <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>INSTANTE</th>
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>PLATAFORMA</th>
                    <th>GÊNERO</th>
                    <th>TÍTULO DO GAME</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>17/09/2020 19:45</td>
                    <td>TAO HANSEN</td>
                    <td>30</td>
                    <td>PC</td>
                    <td>BATTLE ROYALE</td>
                    <td>FORTNITE</td>
                </tr>
                <tr>
                    <td>17/09/2020 19:45</td>
                    <td>TAO HANSEN</td>
                    <td>30</td>
                    <td>PC</td>
                    <td>BATTLE ROYALE</td>
                    <td>FORTNITE</td>
                </tr>
                <tr>
                    <td>17/09/2020 19:45</td>
                    <td>TAO HANSEN</td>
                    <td>30</td>
                    <td>PC</td>
                    <td>BATTLE ROYALE</td>
                    <td>FORTNITE</td>
                </tr>
                <tr>
                    <td>17/09/2020 19:45</td>
                    <td>TAO HANSEN</td>
                    <td>30</td>
                    <td>PC</td>
                    <td>BATTLE ROYALE</td>
                    <td>FORTNITE</td>
                </tr>
            </tbody>

        </table>
    </div>
);
    }

export default Records;