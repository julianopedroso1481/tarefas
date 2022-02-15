import { TarefaPage } from './app.po';

describe('tarefa App', function() {
  let page: TarefaPage;

  beforeEach(() => {
    page = new TarefaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
