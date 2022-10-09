import styled from "styled-components";
import { ReactComponent as SpinnerSVG } from "../../images/spinner.svg";

export const Spinner = styled(SpinnerSVG)`
  width: 40px;
  height: 40px;
  transform: scale(1.8);
  overflow: hidden;
`;
