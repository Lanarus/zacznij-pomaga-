import { Element } from "react-scroll";

import { ROUTES_TO_CLASSNAMES_MAP } from "../../constants/routes";
import { COLUMNS_ROUTE } from "../../constants/routeNames";


export const HomeThreeColumns = () => {
    return ( 
      <Element 
     name={ROUTES_TO_CLASSNAMES_MAP[COLUMNS_ROUTE]}>
    <div className="containerColumns">
      <div className="columns">
        <article>
          <h1>10</h1>
          <h3>ODDANYCH WORKÓW</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s</p>
        </article>
        <article>
          <h1>5</h1>
          <h3>WSPARTYCH ORGANIZACJI</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s</p>
        </article>
        <article>
          <h1>7</h1>
          <h3>ZORGANIZOWANY ZBIÓREK</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s</p>
        </article>
      </div> 
    </div>
    </Element>
  );
}
 
