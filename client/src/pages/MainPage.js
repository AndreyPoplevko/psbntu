import React from 'react';
import ContactsInfo from '../components/ContactsInfo';
import NewsVidgets from '../components/NewsVidgets';

import './styles/MainPage.css'

import logo from '../components/images/logo.png'

const MainPage = () => {
    return (
        <div>
            <div className="content">
                <div id="HeadContainer">
                    <img src={logo} alt='logo' id='HeadContainerLogo'/>
                    <div id="HeadContainerText">
                        <div>Первичная профсоюзная организация студентов БНТУ</div>
                        <hr/>
                        <i>- Ты никогда не останешься один! -</i>
                    </div>
                </div>
            </div>
            <div id='NewsText'><b>Наши новости:</b></div>
            <NewsVidgets/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum doloremque omnis fugit quo repellendus accusamus similique asperiores maiores, consequuntur, aliquam natus sint modi porro alias! Facere quam qui quidem exercitationem, odio voluptate, accusamus, quos perspiciatis quo dolorem inventore. Harum modi natus mollitia accusantium adipisci nulla qui cumque repudiandae fugiat? Mollitia cupiditate a omnis consequatur quaerat expedita quidem adipisci ullam? Est pariatur, voluptatibus nostrum, facilis illum voluptate doloremque impedit, temporibus veniam aliquam sed vitae natus provident. Ratione debitis quidem, ab dolore consequatur voluptas officiis enim, rerum fugiat dignissimos, provident ducimus ea? Eius quam ut aspernatur possimus illum dignissimos dolore non iste quaerat iusto, modi vitae eos provident. Hic deleniti laboriosam sunt incidunt, recusandae doloribus tempora! Quisquam perferendis ad eveniet totam nobis odit sed quos dolore unde cumque distinctio accusantium iure ullam velit, obcaecati voluptatum pariatur repellendus minus. Eveniet accusamus accusantium mollitia in minima dolorem molestiae, esse odio veritatis voluptatibus id! Excepturi, ut! Qui quam est tenetur, in laudantium assumenda. Numquam fugit eveniet ad repudiandae doloribus enim eaque odio eum vero alias eos natus voluptas et, praesentium beatae aperiam rem omnis corrupti optio. Quas praesentium nostrum sunt labore reiciendis quis tenetur corrupti a quibusdam eos qui corporis quod, dolores maiores! Eum exercitationem temporibus accusantium veniam, dicta accusamus, voluptatibus maxime totam optio consequatur, tempora nihil tempore perspiciatis soluta ipsa quis. Perferendis voluptas corrupti impedit modi eveniet pariatur incidunt, itaque quos distinctio sed illo! Similique nisi, molestiae voluptatibus recusandae, esse nesciunt quo consequatur voluptates debitis quidem labore voluptate dicta laudantium minima facere reiciendis iusto maxime? Quae, blanditiis optio. Harum, id ea nisi rem quisquam amet voluptatem aperiam, earum suscipit rerum temporibus quas praesentium, quasi neque? Ducimus aut veniam placeat id repudiandae modi mollitia cupiditate recusandae deserunt, dolorum sit distinctio voluptas tempora saepe sint voluptate eius blanditiis culpa reprehenderit fugit maxime inventore eligendi excepturi neque. Adipisci quis nesciunt laborum itaque, quasi voluptate earum tempora dolorum cupiditate. Vitae repellat molestias error nihil, unde qui nemo at non eligendi. Ipsum, quidem nemo ullam voluptatibus expedita repudiandae maiores reiciendis. Autem molestias quia corporis! Quaerat nesciunt eum ullam nam, blanditiis at culpa repellat corporis consequuntur modi. Autem exercitationem eveniet culpa totam ullam quaerat, consectetur unde debitis. Aliquam fugit suscipit illum animi, tempora necessitatibus labore, reiciendis quas voluptatum pariatur non accusamus quam quae iste. Totam recusandae deserunt, alias cupiditate placeat corrupti doloremque possimus sed praesentium quisquam soluta asperiores provident neque ullam veniam minima dolorum similique, sapiente dicta tempora illum. Soluta illo consequuntur suscipit in perferendis minima dignissimos cum quam? Veniam quis repudiandae at, porro nobis dicta temporibus dolores vitae quae quod pariatur ab quasi aliquam dolorum numquam ipsa nostrum maiores eius distinctio facilis ex. Rem inventore doloribus cupiditate, repellendus blanditiis deserunt voluptates at obcaecati officiis. Voluptates deserunt eaque fugiat adipisci minima assumenda sed numquam beatae recusandae facilis nemo, ipsum velit vero optio nulla error! Fuga autem, quaerat consequuntur nesciunt aspernatur nisi sapiente explicabo optio eum, voluptate inventore impedit aperiam asperiores consequatur harum cupiditate dolor quia ducimus quis animi vero quam quasi? Et delectus odit nesciunt tempora est quis aspernatur.
            </p>
            <ContactsInfo/>
        </div>
    );
};

export default MainPage;