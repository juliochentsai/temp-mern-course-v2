import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;  //first item will get whatever the width of the Bigsidebar
    }
    .dashboard-page {
      width: 90%; // The content will be 90% of 1fr  
    }
  }
`;
export default Wrapper;
