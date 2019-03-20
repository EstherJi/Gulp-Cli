
## Gulp CLI

> 针对不同主题替换颜色&图片路径，默认js文件中不能出现直接图片地址，请用class代替，css文件会根据-p参数，自动引入theme下相应主题文件，html/css中需要替换的图片地址请引用default文件夹的图片

dev：gulp dev (-p=company_A)  /* -p后面参数代表文件夹路径，括号内容可选，不写默认default文件夹下的图片&主题 */

build: gulp build -env(=prod) (-p=company_A) /* -p后参数跟dev一样，-env后参数为打包环境，根据传入参数打包不同环境代码 */