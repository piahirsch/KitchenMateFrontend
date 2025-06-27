import { mount } from '@vue/test-utils'
import RecipeList from '../src/components/RecipeList.vue'

describe('RecipeList', () => {
  const recipes = [
    { id: 1, name: 'A', category: 'X', steps: [], description: '', difficultyLevel: '', link: '', ingredients: [] },
    { id: 2, name: 'B', category: 'Y', steps: [], description: '', difficultyLevel: '', link: '', ingredients: [] },
  ]

  it('rendert alle Rezepte', () => {
    const wrapper = mount(RecipeList, {
      props: { recipes },
    })

    const cards = wrapper.findAllComponents({ name: 'RecipeCard' })
    expect(cards.length).toBe(2)
  })
})
