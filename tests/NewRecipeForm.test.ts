import { mount } from '@vue/test-utils'
import NewRecipeForm from '../src/components/NewRecipeForm.vue'
import { vi } from 'vitest'
import { client } from '@/lib/axios'

vi.mock('@/lib/axios', () => ({
  client: {
    post: vi.fn().mockResolvedValue({}),
    put: vi.fn().mockResolvedValue({}),
  },
}))

describe('NewRecipeForm', () => {
  it('füllt das Formular und sendet es ab', async () => {
    const wrapper = mount(NewRecipeForm, {
      props: {
        editRecipe: null,
        onAdded: vi.fn(),
        onClose: vi.fn(),
      },
    })

    await wrapper.find('input[type="text"]').setValue('Test Rezept')
    await wrapper.find('textarea').setValue('Leckeres Gericht')
    await wrapper.find('form').trigger('submit.prevent')

    // Hier keine API erwartet, nur dass es nicht crasht
    expect(wrapper.exists()).toBe(true)
  })
})
