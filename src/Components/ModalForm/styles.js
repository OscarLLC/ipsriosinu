import styled from 'styled-components'

export const ModalContent = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius:5px; 
  display: flex;
  flex-direction: column;
  align-items: center;

  .Modal__container {
  position: relative;
  top: 10rem;
  background-color: #ffffff;
  padding: 1rem;
  width: 400px;
}

.Modal__close-button {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: #F5F5F5;
  padding: 0.5rem 1rem;
}

h3{
  color: white;
}


`