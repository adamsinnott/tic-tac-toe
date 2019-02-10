import React from "react";

const Grid = (props) => {
    return (
        // I think I should programatically build this up
        <table className={props.playerTurn}>
            <tbody>
                <tr><td><span onClick={(event) => props.clickCell(event.target.id)} id="0_0" className={props.gameState.length > 0 ? props.gameState[0][0] : "not-selected"}>&nbsp;</span></td><td><span onClick={(event) => props.clickCell(event.target.id)} id="0_1" className={props.gameState.length > 0 ? props.gameState[0][1] : "not-selected"}>&nbsp;</span></td><td><span onClick={(event) => props.clickCell(event.target.id)} id="0_2" className={props.gameState.length > 0 ? props.gameState[0][2] : "not-selected"}>&nbsp;</span></td></tr>
                <tr><td><span onClick={(event) => props.clickCell(event.target.id)} id="1_0" className={props.gameState.length > 0 ? props.gameState[1][0] : "not-selected"}>&nbsp;</span></td><td><span onClick={(event) => props.clickCell(event.target.id)} id="1_1" className={props.gameState.length > 0 ? props.gameState[1][1] : "not-selected"}>&nbsp;</span></td><td><span onClick={(event) => props.clickCell(event.target.id)} id="1_2" className={props.gameState.length > 0 ? props.gameState[1][2] : "not-selected"}>&nbsp;</span></td></tr>
                <tr><td><span onClick={(event) => props.clickCell(event.target.id)} id="2_0" className={props.gameState.length > 0 ? props.gameState[2][0] : "not-selected"}>&nbsp;</span></td><td><span onClick={(event) => props.clickCell(event.target.id)} id="2_1" className={props.gameState.length > 0 ? props.gameState[2][1] : "not-selected"}>&nbsp;</span></td><td><span onClick={(event) => props.clickCell(event.target.id)} id="2_2" className={props.gameState.length > 0 ? props.gameState[2][2] : "not-selected"}>&nbsp;</span></td></tr>
            </tbody>
        </table>
    )
}

export default Grid;