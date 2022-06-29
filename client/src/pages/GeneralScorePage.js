import React from 'react';
import ContactsInfo from '../components/ContactsInfo';

import './styles/GeneralScorePage.css'

const GeneralScorePage = () => {
    return (
        <div>
            <div id='GeneralScoreBody'>
                <table>
                    <tr>
                      <th>№</th>
                      <th>Ф.И.О.</th>
                      <th>Рейтинг</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Гнатюк Максим</td>
                      <td>18</td>
                     </tr>
                    <tr>
                      <td>2</td>
                      <td>Макутонин Энтони Эдуардович</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Поплевко Андрей Николаевич</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>...</td>
                      <td>...</td>
                      <td>...</td>
                    </tr>
                </table>
            </div>
            <ContactsInfo/>
        </div>
    );
};

export default GeneralScorePage;