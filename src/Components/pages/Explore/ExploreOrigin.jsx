import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRecipes, getCategories } from '../../../redux/actions';
import { PageTitle, LinkButton } from '../../atoms';
import { Search, RecipeCardsContainer } from '../../organisms';
import { Footer } from '../../molecules';
import profileIcon from '../../../images/profileIcon.svg';

const ExploreOrigin = ({ loaded, recipes, fillListOfRecipes, fillListOfCategories }) => {
  const [areas, setAreas] = useState([]);

  const getAreas = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    setAreas(data.meals);
  };

  useEffect(() => {
    getAreas();
    fillListOfRecipes('meal');
    fillListOfCategories('meal');
  }, [fillListOfCategories, fillListOfRecipes]);

  return (
    <main>
      <header>
        <LinkButton
          src={ profileIcon }
          alt="perfil"
          href="/perfil"
          testid="profile-top-btn"
        />
        <PageTitle>Explorar Origem</PageTitle>
        <Search category="meal" />
        <select data-testid="explore-by-area-dropdown">
          {areas.map((area) => (
            <option
              key={ area.strArea }
              data-testid={ `${area.strArea}-option` }
              value={ area.strArea }
            >
              {area.strArea}
            </option>
          ))}
        </select>
        {loaded && <RecipeCardsContainer recipes={ recipes } category="Meal" />}
      </header>
      <Footer />
    </main>
  );
};

ExploreOrigin.propTypes = {
  loaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fillListOfCategories: PropTypes.func.isRequired,
  fillListOfRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  buttonLoaded: state.recipes.buttonLoaded,
  recipes: state.recipes.recipes,
  categories: state.recipes.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
  fillListOfCategories: (category) => dispatch(getCategories(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreOrigin);
