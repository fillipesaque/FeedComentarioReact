import { useState } from 'react'
import Style from '../src/App.module.css'

function App() {
 /* 1 gerenciar as informaçoes q irao sem renderizadas na tela */
 /* 2- criar a funçao de dubmit do form para gerar o comentarios */

 
  const [email , setEmail] = useState('')           /* hook email */
  const [textArea , setTextArea] = useState('')     /* hook comentario */
  const [comments , setComments] = useState([])       /* hook para armazenar email e comentario */


  /* funçao para renderizar os dados do form */
  function handleSubmit (ev)  {
      ev.preventDefault()

      const newComent = {                           /* objeto */
        id: Math.floor(Math.random() * 100000),     /* gera id aleatorio */
        author: email,
        comment: textArea,
        date: new Date()  ,                         /* data em q foi gerado o comentario */
      }
      setComments((state => [newComent, ... state])) /* acrecentando os comentarios novos ao antigo */
      setEmail ('')
      setTextArea ('')
  }

  return (
    <>
      <div className={Style.ContainerFeed}>
          <h2>Seleçao de Comentarios</h2>
          
      <form onSubmit={handleSubmit}>

         <label htmlFor="">Email</label>
          <input
          required
           type="text" 
           value={email}
           onChange={(ev) => setEmail(ev.target.value)} /* ouvindo input email */
           />

          <label htmlFor="">Comentario</label>
          <textarea 
          required
          cols="30" 
          rows="10"
          value={textArea}
          onChange={(ev) => setTextArea(ev.target.value)} /* ouvindo input comentario */
          >
          </textarea>

          <button type='submit'>Enviar Comentario !</button>
          <hr />

      </form>

            <section>
                {comments.length > 0   /* renderizaçao condicional */
                ?(
                  comments.map((comment) => (
                    <div key={comment.id}>
                        <h3>{comment.author}</h3>
                        <span>Em {comment.date.toLocaleString()}</span>
                        <p>{comment.comment}</p>

                    </div>
                  ))
                )
              : (
                <p>Seja o Primeiro A Comentar</p>
              )}
            </section>

      </div>


      
    </>
  )
}

export default App
