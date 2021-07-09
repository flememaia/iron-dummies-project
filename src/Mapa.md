# Mapa App 

## Página inicial não logada: Fórum, LogIn ou Become a Dummy!
<Route path="/h" component={Home} />
Componente <Home /> renderiza os Componentes <NavBar /> e o <ForumListHome /> 

### Navbar NÃO LOGADO
Apenas estética. Não permite acesso às funcionaliades. 
***PENDENTE: Qdo tentar acessar, gerar alerta para se Registrar ou Criar conta. 

### Fórum NÃO LOGADO
Acesso ao fórum com contribuições e botão detalhes das contribuições. (Não consegue incluir contribuição, editar ou deletar). 

## Become a Dummy:
<Route path="/newdummy" component={NewUser} />
Renderiza o Componente <NewUser /> para inclusão de username, email e password. 
***PENDENTE: NÃO DEIXAR TER USERNAME REPETIDO 
Botão Creata New Account => Direciona para a página principal (Componente <AppLoggedIn/>) logado (id do usuário incorporado ao parâmetro de rota)

## LogIn:
<Route path="/login" component={LogIn} />
Renderiza o Componente <LogIn /> para inclusão de username e password. Com o username, ocorre a validação da senha digitada. 
Caso o username e/ou senha estejam incorretos, exibe o "alerta username andor password incorrect, please try again!" e volta para a página do Login.
Se correto => Direciona para a página principal (Componente <AppLoggedIn/>) logado (id do usuário incorporado ao parâmetro de rota)

## Página inicial LOGADA 
<Route exact path="/home/:id" component={AppLogedIn} />

### Fórum 
Acesso ao fórum completo:
     
1. visualizar contribuições;
2. botão incluir uma contribuição: username, contribuição, skilltype e source. As novas contribuições geram um novo id, e armazenam tb o id do user.
<Route path="/newcontribution/:id" component={NewContribution} />
*** PENDENTE - atribuir pontuação para quem ajuda a comunidade etc.

3. ícone details: visualizar detalhes das contribuições;
<Route path="/contributiondetails/:id" component={ContributionDetails}/>

4. ícone editar 
<Route path="/editcontribution/:id" component={EditContribution} />
***PENDENTE validar para editar as suas contribuições - validação do username

5. ícone deletar 
<Route path="/deletecontribution/:id" component={DeleteContribution}/>
***PENDENTE validar para editar as suas contribuições - validação do username

6. ícone estrela - gostou da contribuição? => dar like. 
***PENDENTE - filtrar por contribuições mais votadas. 

7. Todas as opções tem a possibilidade de seguir em frente ou voltar.

***PENDENTE Qdo passar o mouse em cima dos botões aparecer o que eles fazem (editar, deletar etc...)
*** PENDENTE pedir ajuda => comunidade poder responder

#### Fórum Views - Basics, WebDev Front, WebDev Back, Have no Idea
Pela Navbar é possível navegar acessar as contribuições relacionadas apenas a Basics, WebDev Front ou Back. 
<Route exact path="/forumbasics" component={AppLoggedInForumBasics} />
<Route exact path="/forumfrontend" component={AppLoggedInForumWebDevFront} />
<Route exact path="/forumbackend" component={AppLoggedInForumWebDevBack} />
<Route exact path="/forumhavenoidea" component={ForumList} />

### Track your Progress!
Acesso ao preenchimento das skills e gráfico.
#### Update Your Skills
##### M1 <Route path="/updateskills/:id" component={EditSkillsM1}/>
##### M2 <Route path="/updateskills_m2/:id" component={EditSkillsM2}/>   
##### M3 <Route path="/updateskills_m3/:id" component={EditSkillsM3}/>
Preencher as 18 habilidades, mesmo que zero. As mesmas habilidades estão disponíveis no link M1, M2 e M3. A diferença é o armazenamento para trackear a evolução no gráfico. 

Para facilitaro preenchimento, vc inicialment eescolhe entre Basic, Front-End ou Back-End, e as habilidades de cada opção são renderizadas no formulário com uma dropdown list explicando o que seria cada nota (0 à 5)

*** PENDENTE: Quando termina de preencher, gera um report com a pontuação e ranking. 
*** PENDENTE: Otimizar para apenas 1 componente como o Pedro ensinou.

#### Generate Your Report 
<Route path="/chart/:id" component={ChartBox}/>
Após preenchimento das habilidades, você pode gerar o seu gráfico. Com o preenchimento dos módulos seguintes, o gráfico gera a comparação e evoluação das habilidades. 

*** PENDENTE: Fazer por semana. 

# MELHORIAS 
## Otimizar os códigos: 
1. Separar os componentes pelas partes que se repetem e não repetir o componente inteiro. 
2. Arrumar nome dos componentes para bater com o nome das rotas e dos links. 