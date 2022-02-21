import React, { useState } from "react";
import "./style.css";

export default function Modal({ buttonName, card, type, onSubmit }) {
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({
        nome: "", cargahoraria: 0,
        descricao: "", planodecurso: ""
    });

    const toggleModal = () => {
        setModal(!modal);
    };


    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {type ?
                (<button onClick={toggleModal} className="btn">
                    {buttonName}
                </button>)
                :
                (
                    <button onClick={toggleModal} className='actions'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                            </path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                )

            }


            {modal && (
                <div className="CardModalModal">
                    <div onClick={toggleModal} className="CardModalOverlay"></div>
                    <div className="CardModalModalContent">
                        <h2>{buttonName}</h2>

                        <label htmlFor="nameNewDeck">Nome da matéria</label>
                        <input type="text" name="frontNewCard" id="frontNewCard" placeholder="Insira o nome"
                            defaultValue={card ? card.nome : ""}
                            onChange={(r) => { setInput({ ...input, nome: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.nome = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Carga horária</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira a carga horária"
                            defaultValue={card ? card.cargahoraria : ""}
                            onChange={(r) => { setInput({ ...input, cargahoraria: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.cargahoraria = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Descrição</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira a descrição"
                            defaultValue={card ? card.descricao : ""}
                            onChange={(r) => { setInput({ ...input, descricao: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.descricao = r.target.value } }} />

                        <label htmlFor="nameNewDeck">Plano de curso</label>
                        <input type="text" name="backNewCard" id="backNewCard" placeholder="Insira o plano de curso"
                            defaultValue={card ? card.planodecurso : ""}
                            onChange={(r) => { setInput({ ...input, planodecurso: r.target.value }) }}
                            onBlur={(r) => { if (card) { card.planodecurso = r.target.value } }} />

                        <button className="btn btn-submit"
                            onClick={() => onSubmit(input, card)}>{buttonName}</button>

                        <button className="CardModalCloseModal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
