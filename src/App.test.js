import React from 'react';
import { fireEvent, screen, act } from '@testing-library/react';
import renderWithRouterAndRedux from './tests/helper'
import { Drinks, Explore, ExploreDrinkIngredients, ExploreDrinks, ExploreFoodIngredients, ExploreFoods, ExploreOrigin, Foods, Login, NotFound, Profile, RecipesDone, RecipesFavorites } from '../src/Components/pages'
import App from './App';

const foodResponse = Promise.resolve({
  json: () => Promise.resolve({
    "meals": [
    {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": null,
    "strIngredient17": null,
    "strIngredient18": null,
    "strIngredient19": null,
    "strIngredient20": null,
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": null,
    "strMeasure17": null,
    "strMeasure18": null,
    "strMeasure19": null,
    "strMeasure20": null,
    "strSource": null,
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
    }
    ]
    })
});

const drinkResponse = Promise.resolve({
  json: () => Promise.resolve({
    "drinks": [
    {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": null,
    "strIngredient17": null,
    "strIngredient18": null,
    "strIngredient19": null,
    "strIngredient20": null,
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": null,
    "strMeasure17": null,
    "strMeasure18": null,
    "strMeasure19": null,
    "strMeasure20": null,
    "strSource": null,
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
    }
    ]
    })
});

const ingredientsDrinkResponse = Promise.resolve({
  json: () => Promise.resolve({
    "drinks": [
    {
    "strIngredient1": "Light rum"
    },
    {
    "strIngredient1": "Applejack"
    },
    {
    "strIngredient1": "Gin"
    },
    {
    "strIngredient1": "Dark rum"
    },
    {
    "strIngredient1": "Sweet Vermouth"
    },
    {
    "strIngredient1": "Strawberry schnapps"
    },
    {
    "strIngredient1": "Scotch"
    },
    {
    "strIngredient1": "Apricot brandy"
    }
    ]
    })
});

const ingredientsFoodResponse = Promise.resolve({
  json: () => Promise.resolve({
    "meals": [
    {
    "idIngredient": "1",
    "strIngredient": "Chicken",
    },
    {
    "idIngredient": "2",
    "strIngredient": "Salmon",
    },
    {
    "idIngredient": "3",
    "strIngredient": "Beef",
    },
    {
    "idIngredient": "4",
    "strIngredient": "Pork",
    },
    {
    "idIngredient": "5",
    "strIngredient": "Avocado",
    },
    {
    "idIngredient": "9",
    "strIngredient": "Apple Cider Vinegar",
    },
    {
    "idIngredient": "10",
    "strIngredient": "Asparagus",
    },
    {
    "idIngredient": "11",
    "strIngredient": "Aubergine",
    },
    {
    "idIngredient": "13",
    "strIngredient": "Baby Plum Tomatoes",
    },
    {
    "idIngredient": "14",
    "strIngredient": "Bacon",
    },
    {
    "idIngredient": "15",
    "strIngredient": "Baking Powder",
    },
    {
    "idIngredient": "16",
    "strIngredient": "Balsamic Vinegar",
    },
    {
    "idIngredient": "17",
    "strIngredient": "Basil",
    },
    {
    "idIngredient": "18",
    "strIngredient": "Basil Leaves",
    }
    ]
    })
});

describe('1 - Tela de login', () => {
  describe('Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login', () => {
    it('O input de email deve possuir o atributo data-testid="email-input"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      expect(emailInput).toBeInTheDocument();
    });

    it('O input de senha deve possuir o atributo data-testid="password-input"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const passwordInput = getByTestId('password-input');
      expect(passwordInput).toBeInTheDocument();
    });
    
    it('O botão de login deve possuir o atributo data-testid="login-submit-btn"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const loginBtn = getByTestId('login-submit-btn');
      expect(loginBtn).toBeInTheDocument();
    });
  });

  describe('Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email', () => {
    it('É possível escrever o email', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      expect(emailInput.value).toBe('pessoa@gmail.com');
    });
  })

  describe('Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha', () => {
    it('É possível escrever a senha', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const passwordInput = getByTestId('password-input');
      fireEvent.change(passwordInput, { target: { value: '123456' } });
      expect(passwordInput.value).toBe('123456');
    });
  })

  describe('Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
    it('- O botão deve estar desativado se o email for inválido', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      fireEvent.change(emailInput, { target: { value: 'pessoa' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(true);
    });

    it('- O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '123456' } });
      expect(loginBtn.disabled).toBe(true);
    });

    it('- O botão deve estar ativado se o email e a senha forem válidos', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
    });
  })

  describe('Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken', () => {
    it('- Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage', () => {
      const { getByTestId, history } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      expect(emailInput).toBeInTheDocument();
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
      fireEvent.click(loginBtn);
      expect(localStorage.getItem('mealsToken')).toBeTruthy();
      expect(localStorage.getItem('cocktailsToken')).toBeTruthy();
    });
  })

  describe('Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão', () => {
    it('Após a submissão, o e-mail de pessoa usuária deve ser salvo em localStorage na chave user no formato { email: email-da-pessoa }', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      expect(emailInput).toBeInTheDocument();
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
      const userLocalStorage = JSON.parse(localStorage.getItem('user'));
      expect(userLocalStorage.email).toBe('pessoa@gmail.com');
    });
  })

  describe('Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login', () => {
    it('- A rota muda para a tela principal de receitas de comidas', () => {
      const { getByTestId, history } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      expect(emailInput).toBeInTheDocument();
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
      fireEvent.click(loginBtn);
      expect(history.location.pathname).toBe('/comidas');
    });
  })
});

describe('2 - Rotas', () => {
  describe('Ao entrar na rota "/"', () => {
    it('Deve renderizar a tela de login', () => {
      const { getByTestId } = renderWithRouterAndRedux(<App />)
      expect(getByTestId('email-input')).toBeInTheDocument()
    })
  })

  describe('Ao entrar na rota "/comidas"', () => {
    it('A tela de Comidas principal deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<Foods />);
      expect(getByText('Comidas')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/bebidas"', () => {
    it('A tela de Bebidas principal deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<Drinks />);
      expect(getByText('Bebidas')).toBeInTheDocument();
    });
  })
  

  describe('Ao entrar na rota "/comidas/:id"', () => {
    it('A tela de detalhes da comida deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => foodResponse);
      await act(async () => { 
        const { history } = renderWithRouterAndRedux(<App />)
        history.push('/comidas/52771')
      });
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/bebidas/:id"', () => {
    it('A tela de detalhes da bebida deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => drinkResponse);
      await act(async () => { 
        const { history } = renderWithRouterAndRedux(<App />)
        history.push('/bebidas/52771')
      });
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/comidas/:id/in-progress"', () => {
    it('A tela de progresso da comida deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => foodResponse);
      await act(async () => { 
        const { history } = renderWithRouterAndRedux(<App />)
        history.push('/comidas/52771/in-progress')
      });
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/bebidas/:id/in-progress"', () => {
    it('A tela de progresso da bebida deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => drinkResponse);
      await act(async () => { 
        const { history } = renderWithRouterAndRedux(<App />)
        history.push('/bebidas/52771/in-progress')
      });
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/explorar"', () => {
    it('A tela de explorar deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<Explore />);
      expect(getByText('Explorar')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/explorar/comidas"', () => {
    it('A tela de explorar de comidas deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<ExploreFoods />);
      expect(getByText('Explorar Comidas')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/explorar/comidas"', () => {
    it('A tela de explorar de comidas deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => foodResponse);
      await act(async () => {
        renderWithRouterAndRedux(<ExploreFoods />)
        fireEvent.click(screen.getByTestId('explore-surprise'));
      });
      expect(screen.getByText('Spicy Arrabiata Penne')).toBeInTheDocument();
    })
  })

  describe('Ao entrar na rota "/explorar/bebidas"', () => {
    it('A tela de explorar de bebidas deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<ExploreDrinks />);
      expect(getByText('Explorar Bebidas')).toBeInTheDocument();
    });
  })

  describe('Ao entrar na rota "/explorar/comidas/ingredientes"', () => {
    it('A tela de ingredientes de comidas deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => ingredientsFoodResponse);
      await act(async () => { 
        renderWithRouterAndRedux(<ExploreFoodIngredients />)
      });
      expect(screen.getByText('Chicken')).toBeInTheDocument();
    });
  });

  describe('Ao entrar na rota "/explorar/bebidas/ingredientes"', () => {
    it('A tela de ingredientes de comidas deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => ingredientsDrinkResponse);
      await act(async () => { 
        renderWithRouterAndRedux(<ExploreDrinkIngredients />)
      });
      expect(screen.getByText('Light rum')).toBeInTheDocument();
    });
  });

  describe('Ao entrar na rota "/explorar/comidas/area"', () => {
    it('A tela de explorar comidas por área deve renderizar', async () => {
      global.fetch = jest.fn().mockImplementation(() => foodResponse);
      await act(async () => { 
        renderWithRouterAndRedux(<ExploreOrigin />)
      });
      expect(screen.getByText('Explorar Origem')).toBeInTheDocument();
    });
  });

  describe('Not Found', () => {
    it('Ao entrar na rota "/explorar/bebidas/area" renderiza not', () => {
      const { getByText } = renderWithRouterAndRedux(<NotFound />);
      expect(getByText('Not Found')).toBeInTheDocument();
    })
  })

  describe('Ao entrar na rota "/perfil"', () => {
    it('A tela de perfil deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<Profile />);
      expect(getByText('Perfil')).toBeInTheDocument();
    })
  })

  describe('Ao entrar na rota "/receitas-feitas"', () => {
    it('A tela de receitas feitas deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<RecipesDone />);
      expect(getByText('Receitas Feitas')).toBeInTheDocument();
    })
  })

  describe('Ao entrar na rota "/receitas-favoritas"', () => {
    it('A tela de receitas favoritas deve renderizar', () => {
      const { getByText } = renderWithRouterAndRedux(<RecipesFavorites />);
      expect(getByText('Receitas Favoritas')).toBeInTheDocument();
    })
  })
})

describe('3 - Tela de comidas e bebidas', () => {
  describe('', () => {
    it('O input de email deve possuir o atributo data-testid="email-input"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      expect(emailInput).toBeInTheDocument();
    });
  })
})
