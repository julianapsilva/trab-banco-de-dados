import React, { useState } from "react";
import "./style.css";

export default function Modal({ buttonName, card }) {
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({ question: "", answer: "" });


    const onChangeQuestion = (e) => {
        let dummy = input;
        dummy.question = e.target.value;
        setInput(dummy)
    }

    const onChangeAnswer = (e) => {
        let dummy = input;
        dummy.answer = e.target.value;
        setInput(dummy)
    }

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleInputQuestion = () => {
        return (card) ? card.question : ""
    }
    const handleInputAnswer = () => {
        return (card) ? card.answer : ""
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn">
                {buttonName}
            </button>

            {modal && (
                <div className="CardModalModal">
                    <div onClick={toggleModal} className="CardModalOverlay"></div>
                    <div className="CardModalModalContent">
                        <h2>{buttonName}</h2>

                        <label htmlFor="nameNewDeck">Nome da matéria</label>
                        <input type="text" name="frontNewCard" id="frontNewCard" placeholder="Insira o nome"
                            defaultValue={handleInputQuestion()} onChange={onChangeQuestion}
                            onBlur={(r) => { if (card) { card.question = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Carga horária</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira a carga horária"
                            defaultValue={handleInputAnswer()} onChange={onChangeAnswer}
                            onBlur={(r) => { if (card) { card.answer = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Descrição</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira a descrição"
                            defaultValue={handleInputAnswer()} onChange={onChangeAnswer}
                            onBlur={(r) => { if (card) { card.answer = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Plano de curso</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira o plano de curso"
                            defaultValue={handleInputAnswer()} onChange={onChangeAnswer}
                            onBlur={(r) => { if (card) { card.answer = r.target.value } }} />

                        <button className="btn btn-submit" onClick={() => console.log('submit')}>{buttonName}</button>

                        <button className="CardModalCloseModal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
