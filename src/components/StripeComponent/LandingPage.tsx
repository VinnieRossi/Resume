import { useState } from 'react';
import { NavBar } from '../NavBar';

const LandingPage = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className='flex justify-center dark:bg-gray-700 dark:text-white'>
        <article className='max-w-5xl'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum arcu mi, sed mattis massa placerat a. Mauris volutpat lorem
            ut justo varius, nec lobortis leo vehicula. Curabitur ut dapibus
            dui. Phasellus at augue finibus, consectetur sapien at, vestibulum
            nulla. Mauris non erat posuere, tempus quam in, commodo neque. Duis
            felis quam, dictum in tempor vel, gravida non neque. Suspendisse et
            maximus est. Integer accumsan magna ut volutpat rutrum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Cras porttitor, ligula ut consequat ultrices, tellus
            libero mattis purus, nec posuere mi eros vitae metus. Nullam
            placerat viverra blandit. Mauris placerat iaculis massa sed
            pulvinar. In dolor erat, ultricies vel sapien ut, lobortis euismod
            dui. Cras vitae dignissim nisl. Pellentesque ornare, est nec iaculis
            egestas, orci neque lacinia metus, ut dictum neque felis in ex.
            Pellentesque mattis leo ac tortor dictum pulvinar. Phasellus iaculis
            eros id nisi commodo feugiat. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Suspendisse
            hendrerit quam in varius dictum. Duis laoreet sollicitudin justo eu
            porttitor. Donec facilisis lacus ac convallis fringilla. Suspendisse
            potenti. Pellentesque gravida porttitor elit, vel tempus mi pretium
            accumsan. Suspendisse condimentum dictum consequat. Suspendisse et
            luctus leo. Quisque et luctus mauris. Sed fermentum venenatis lorem,
            a vehicula libero tempor sed. Pellentesque nec finibus diam, a
            malesuada mauris. In blandit malesuada tellus, id dapibus massa
            ornare a. Vestibulum risus nulla, posuere in massa a, commodo cursus
            lacus. Nullam ut erat nisl. Etiam pulvinar, est eget aliquet
            scelerisque, arcu tortor ultricies sem, ac volutpat velit risus a
            nibh. Donec ut malesuada sapien. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed nec dignissim lorem, in cursus
            turpis. Donec quis lorem sagittis diam tempor consequat. Etiam
            sagittis egestas sollicitudin. Maecenas quis luctus eros. Sed quis
            vulputate turpis. Vestibulum vel varius ligula, ut pretium lorem.
            Sed at placerat lacus. Nulla quis euismod lectus. Quisque eu
            tincidunt ligula. Nam eget pulvinar turpis, vitae pharetra lacus.
            Proin malesuada nulla eu felis elementum sodales. Curabitur vehicula
            aliquet nunc vitae fringilla. Proin ut magna id justo fermentum
            volutpat. Duis vitae est sed odio blandit venenatis. Quisque
            ullamcorper nisi vel varius tempor. In hac habitasse platea
            dictumst. Phasellus molestie arcu ac neque aliquam cursus. Nulla non
            ullamcorper augue. Proin quis egestas magna. Phasellus eget elit sit
            amet ligula egestas mattis. Quisque interdum odio neque, nec porta
            sapien vulputate non. Aenean molestie turpis nec libero tempor, sed
            interdum urna placerat. Fusce bibendum id nisl eu vulputate. Proin
            lacus est, mollis at cursus vitae, venenatis a leo.
          </p>
          <p>
            Pellentesque mattis leo ac tortor dictum pulvinar. Phasellus iaculis
            eros id nisi commodo feugiat. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Suspendisse
            hendrerit quam in varius dictum. Duis laoreet sollicitudin justo eu
            porttitor. Donec facilisis lacus ac convallis fringilla. Suspendisse
            potenti. Pellentesque gravida porttitor elit, vel tempus mi pretium
            accumsan. Suspendisse condimentum dictum consequat. Suspendisse et
            luctus leo. Quisque et luctus mauris. Sed fermentum venenatis lorem,
            a vehicula libero tempor sed. Pellentesque nec finibus diam, a
            malesuada mauris. In blandit malesuada tellus, id dapibus massa
            ornare a. Vestibulum risus nulla, posuere in massa a, commodo cursus
            lacus. Nullam ut erat nisl.
          </p>
          <p>
            Etiam pulvinar, est eget aliquet scelerisque, arcu tortor ultricies
            sem, ac volutpat velit risus a nibh. Donec ut malesuada sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            dignissim lorem, in cursus turpis. Donec quis lorem sagittis diam
            tempor consequat. Etiam sagittis egestas sollicitudin. Maecenas quis
            luctus eros.
          </p>
        </article>
      </section>
    </div>
  );
};

export default LandingPage;
