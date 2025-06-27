import { mount } from '@vue/test-utils'
import RecipeCard from '@/components/RecipeCard.vue'

describe('RecipeCard', () => {
  const recipe = {
    id: 1,
    name: 'Rezept',
    category: 'Test',
    description: 'Beschreibung',
    difficultyLevel: 'Leicht',
    steps: ['Schritt 1'],
    link: '',
    ingredients: [],
  }

  it('öffnet Details beim Klick', async () => {
    const wrapper = mount(RecipeCard, {
      props: { recipe },
    })

    expect(wrapper.text()).not.toContain('Schritt 1')

    await wrapper.trigger('click')
    expect(wrapper.text()).toContain('Schritt 1')
  })
})
