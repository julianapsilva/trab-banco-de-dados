import React from 'react'
import './style.css'
import Modal from '../Modal'

export const Materias = () => {
  const dados = [
    {
      id: 1, nome: 'Banco de dados', cargahoraria: 60,
      descricao: 'descricao', planodecurso: 'plano.pdf'
    },
    {
      id: 2, nome: 'Estrutura de Dados II', cargahoraria: 60,
      descricao: 'descricao', planodecurso: 'plano.pdf'
    },
  ]

  const handleDelete = () => {
    const confirm = window.confirm("Deseja realmente deletar?");
    if (confirm) {
      // api.delete(`/redacao/${this.id}/delete`).then(
      //   alert(
      //     "Matéria deletada com sucesso!"
      //   )
      // )
    }
  }

  return (
    <div className='materias-wrapper'>

      <div className='table'>

        <div className='header-table'>
          <h2>Lista de matérias</h2>
          <Modal buttonName='Criar nova' type={1}/>
        </div>

        <table>
          <tr className='title'>
            <th>Nome</th>
            <th>Carga horária</th>
            <th>Descrição</th>
            <th>Plano de curso</th>
            <th>Ações</th>
          </tr>
          {
            dados.map(({ id, nome, cargahoraria, descricao, planodecurso }, index) => (
              <tr key={id}>
                <td>{nome}</td>
                <td>{cargahoraria}</td>
                <td>{descricao}</td>
                <td>{planodecurso}</td>
                <td>

                  <Modal type={0} buttonName='Editar matéria' card={dados[index]}/>
                  <button className='actions' onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                      </path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"
                      ></line></svg>
                  </button>
                </td>
              </tr>
            ))
          }

        </table>

      </div>

    </div>
  )
}
