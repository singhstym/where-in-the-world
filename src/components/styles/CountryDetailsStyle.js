import styled from "styled-components";

export const CountryDetailsStyle = styled.div`
  padding: 1.5rem;
  color: ${(props) =>
    props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  .back-btn-container {
    width: 100%;
    margin: 1rem 0 2rem 0;
    position: relative;
    button {
      cursor: pointer;
      padding: 0.7rem 0rem 0.7rem 1rem;
      width: 120px;
      border: none;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      font-size: 0.9rem;
      background-color: ${(props) =>
        props.themes ? "hsl(210,22%,22%)" : "hsl(0, 0%, 100%)"};
      color: ${(props) =>
        props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
      outline: none;
    }
    .backArrowIcon {
      pointer-events: none;
      color: ${(props) =>
        props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
      margin-right: 0.5rem;
      font-size: 1.5rem;
      position: absolute;
      top: 50%;
      left: 1.3rem;
      transform: translate(0, -50%);
    }
  }
  .country-details {
    margin-top: 3rem;
    .img-section {
      img {
        width: 100%;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      }
    }
    .details-section {
      .main-details {
        .country-name {
          font-weight: 800;
          margin: 2rem 0 1rem 0;
          font-size: 1.25rem;
        }
      }
      .other-details {
        margin: 2.5rem 0;
      }
      .border-details {
        .border-cards-container {
          display: flex;
          flex-wrap: wrap;
          .border-details-cards {
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            background-color: ${(props) =>
              props.themes ? "hsl(210,22%,22%)" : "hsl(0, 0%, 100%)"};
            color: ${(props) =>
              props.themes ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
            outline: none;
            padding: 0.5rem 1rem;
            margin: 1rem 0.5rem 0 0;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  .semiBoldLabel {
    font-size: 0.9rem;
    font-weight: 600;
  }
  .details-div {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 850px) {
    .country-details {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .img-section {
        width: 40%;
      }
      .details-section {
        width: 55%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .main-details,
        .other-details {
          width: 45%;
        }
        .border-details {
          width: 100%;
          margin-top: 2rem;
        }
      }
    }
  }
`;
