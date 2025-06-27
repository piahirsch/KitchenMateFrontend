import { mount } from '@vue/test-utils'
import AppHeader from '../src/components/AppHeader.vue'

describe('AppHeader', () => {
  const recipes = [
    { id: 1, name: 'Pizza', category: 'Italienisch' },
    { id: 2, name: 'Sushi', category: 'Japanisch' },
    { id: 3, name: 'Pasta', category: 'Italienisch' },
  ]

  it('zeigt alle Kategorien und den "Alle"-Eintrag korrekt an', () => {
    const wrapper = mount(AppHeader, { props: { recipes } })
    
    const listItems = wrapper.findAll('li').map(li => li.text())

    // Die Kategorien sollten Italienisch und Japanisch enthalten
    expect(listItems).toContain('Italienisch')
    expect(listItems).toContain('Japanisch')

    // Der letzte Listeneintrag sollte "Alle" sein
    expect(listItems[listItems.length - 1]).toBe('Alle')
  })
})
