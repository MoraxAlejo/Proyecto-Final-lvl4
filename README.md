# Proyecto-Final-lvl4
# Factores a tener en cuenta
1ero : los seeders deben ejecutarse individualmente. (Por alguna razon el comando php artisan db:seed no lee los seeders) pero cuando se ejecuta el php artisan db:seed --class
(nombre del seeder) si lo ejecuta. Los seeder a ejecutarse son "Personas" "Paginas" "Roles" (Personas crea 50 personas, Paginas tambien y Roles crea los roles 1 y 2 que son admin y usuario ) 

2do : El usuario de administrador debe crearlo desde la API en postman y en el idrol debe poner 1 para que asi pueda ver la vista del administrador (de otra forma no se vera) 

3ro : Los Cruds son 100% funcionales y no hay errores (conocidos) en ellos. CRUD de Bitacoras, enlaces, usuarios, Roles 

4ro : El admin no puede modificar su rol ni eliminarlo (esto generaria errores por eso modifique todo para que no lo haga) 

5to : Lastimosamente por el tiempo no pude hacer las sesiones asi que las vistas de usuario solo estan de lujo. El login te dejara verlas pero no podras modificar datos 
esto debido a que deje el login de ultimo 

6to : la manera en la que se loguea es por idrol pues el programa identifica si eres el rol 1 y si no lo eres te redirecciona a la vista de usuario (si la cuenta no existe 
te dice que el usuario no existe) 

7to : recuerde tener presente que no puede crear datos que tengan dependencia de que otros datos existan en otras tablas. 
ejemplo: si le piden idpersona: y usted pone el 51 y en la tabla solo existen 50 entonces no le dejara crear ningun dato (no arranacara el save) lo mismo con edit. 
