import React from 'react';
import NavBar from '../components/NavBar';
import ContactsInfo from '../components/ContactsInfo';

import './styles/GeneralScorePage.css'

const GeneralScorePage = () => {
    return (
        <div>
            <NavBar/>
            <div id='GeneralScoreBody'>
                <table id='GeneralScoreTable'>
                    <tr>
                        <th>№</th>
                        <th>Ф.И.О.</th>
                        <th>Рейтинг</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <ContactsInfo/>
        </div>
    );
};

export default GeneralScorePage;