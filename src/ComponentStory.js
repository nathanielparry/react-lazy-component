import { storiesOf } from '@kadira/storybook';
import Lazify from './Component';



storiesOf('Lazify', module)

    .add('default', () => (
        <div>

            <h2>This is not lazy</h2>
            <img src="https://placehold.it/400x1000" alt="placeholder" />


            <h2>The following image is lazy</h2>
            <Lazify>
                <img src="https://placehold.it/400x500" alt="placeholder2" />
            </Lazify>


            <h2>This is not lazy</h2>
            <img src="https://placehold.it/400x1000" alt="placeholder" />



            <Lazify>
                <div>
                    <h2>This whole section is lazy</h2>
                    <img src="https://placehold.it/50x50" alt="placeholder3" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </Lazify>


        </div>

    ))
