import { mount } from '@vue/test-utils'
import RecipeCard from '../src/components/RecipeCard.vue'

describe('RecipeCard - Beispieltests', () => {
  const recipe = {
    id: 1,
    name: 'Test Rezept',
    category: 'Dessert',
    description: 'Leckeres Dessert',
    difficultyLevel: 'Einfach',
    steps: ['Schritt 1', 'Schritt 2'],
    link: 'https://www.youtube.com/watch?v=abc123',
    ingredients: [],
  }

  it('zeigt den Namen des Rezepts an', () => {
    const wrapper = mount(RecipeCard, { props: { recipe } })
    expect(wrapper.text()).toContain('Test Rezept')
  })
})
