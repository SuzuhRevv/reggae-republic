import React, { useState } from 'react';
import Cabeçalho from '@/components/cabeçalho';
import Navbar from '@/components/nav-bar';
import Rodape from '@/components/rodape';
import LoggedNavbar from '@/components/logged-nav-bar';
import { useSession } from 'next-auth/react';

const HomePage: React.FC = () => {
  const { data: session, status } = useSession();
  const imagesNational = [
    {
      image: '/caminho/para/imagem-nacional-1.jpg',
      name: 'Nome da imagem nacional 1',
      loremIpsum: 'Lorem ipsum da imagem nacional 1',
    },
    {
      image: '/caminho/para/imagem-nacional-2.jpg',
      name: 'Nome da imagem nacional 2',
      loremIpsum: 'Lorem ipsum da imagem nacional 2',
    },
  ];

  const imagesInternational = [
    {
      image: '/caminho/para/imagem-internacional-1.jpg',
      name: 'Nome da imagem internacional 1',
      loremIpsum: 'Lorem ipsum da imagem internacional 1',
    },
    {
      image: '/caminho/para/imagem-internacional-2.jpg',
      name: 'Nome da imagem internacional 2',
      loremIpsum: 'Lorem ipsum da imagem internacional 2',
    },
  ];

  const [imageNational, setImageNational] = useState<string>('/atracao-nacional.svg');
  const [nameNational, setNameNational] = useState<string>('EDSON GOMES');
  const [loremIpsumNational, setLoremIpsumNational] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur. Massa a sed neque lectus pretium lacus in nunc. Nam elit proin habitant faucibus integer integer. Netus arcu ut nunc ornare mi vitae maecenas. Turpis tristique varius sed consectetur. Varius mauris tristique lorem placerat tortor cursus elementum diam donec.',
  );

  const [imageInternational, setImageInternational] = useState<string>('atracao-internacional.svg');
  const [nameInternational, setNameInternational] = useState<string>('BURNING SPEAR');
  const [loremIpsumInternational, setLoremIpsumInternational] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur. Massa a sed neque lectus pretium lacus in nunc. Nam elit proin habitant faucibus integer integer. Netus arcu ut nunc ornare mi vitae maecenas. Turpis tristique varius sed consectetur. Varius mauris tristique lorem placerat tortor cursus elementum diam donec. Lectus feugiat in nisi urna. Velit ipsum pulvinar augue arcu euismodn.',
  );

  const handleNationalImageDrag = (
    image: string,
    name: string,
    loremIpsum: string,
  ) => {
    setImageNational(image);
    setNameNational(name);
    setLoremIpsumNational(loremIpsum);
  };

  const handleInternationalImageDrag = (
    image: string,
    name: string,
    loremIpsum: string,
  ) => {
    setImageInternational(image);
    setNameInternational(name);
    setLoremIpsumInternational(loremIpsum);
  };

  return (
    <div className="page-container1">
      <Cabeçalho />
      {session ? <LoggedNavbar /> : <Navbar />}

      <div className="atraçoes-introduction-section" style={{ backgroundColor: '#F7D901' }}>
        <div className="section-content">
          <div className="image-container">
            <img src="/reggae_logo.svg" alt="Imagem da atração" draggable={false} />
          </div>
          <div className="section-description">
            <div className="text-container">
              <div className="section-text">
                <div className='section-title'>
                  <h2>REPÚBLICA DO REGGAE 2023:</h2>
                  <p>20 ANOS DE RESISTÊNCIA</p>
                  <br />
                </div>
                <p id="section1-p-chamada">CONFIRA AS ATRAÇÕES:</p>
                <p id="section1-plorem">
                  Lorem ipsum dolor sit amet consectetur. Mauris facilisis vestibulum leo nulla tristique sed dolor elementum.
                  Phasellus etiam magna convallis est maecenas aliquet sagittis tristique turpis. Venenatis in tellus auctor amet ac ut.
                  Feugiat arcu at nam amet sit amet enim. Consequat et elementum congue turpis nunc lacinia consectetur. Amet aliquet eu
                  id ut sapien ipsum elit vitae. Semper risus feugiat nam risus sodales maecenas. Pellentesque tristique consequat etiam
                  ornare sem aliquam. Ultrices ac arcu quis pellentesque rhoncus quam massa vitae tellus. Scelerisque ultrices volutpat
                  neque orci suspendisse vitae turpis nunc orci. Pharetra sagittis facilisi et mattis. Potenti diam scelerisque
                  pellentesque augue tempor maecenas in ultricies. Sem urna id vel vitae nisi tempus blandit consectetur. Egestas sed
                  imperdiet enim diam in neque curabitur. Dolor diam neque accumsan a sit amet. Aliquam tincidunt pellentesque luctus amet
                  leo tristique sed dapibus. Vitae dolor arcu nulla quis morbi cursus mi. Mi eu vivamus vitae eget bibendum risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="attractions-section-national"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const draggedImage = JSON.parse(e.dataTransfer.getData('text/plain'));
          handleNationalImageDrag(
            draggedImage.image,
            draggedImage.name,
            draggedImage.loremIpsum
          );
        }}
      >
        <h2 className="attractions-title">ATRAÇÕES NACIONAIS</h2>
        <div className="attractions-list">
          <div className="attraction-item">
            <div className="section edson-gomes" style={{ backgroundColor: '#009C33' }}>
              <div className="section-content">
                <div className="image-container">
                  <img
                    src={imageNational}
                    alt="Imagem da atração"
                    draggable={false}
                  />
                </div>
                <div className="section-description">
                  <div className="text-container">
                    <div className="section-text" id="section2-text">
                      <h3>{nameNational}</h3>
                      <p>{loremIpsumNational}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="attractions-section-international"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const draggedImage = JSON.parse(e.dataTransfer.getData('text/plain'));
          handleInternationalImageDrag(
            draggedImage.image,
            draggedImage.name,
            draggedImage.loremIpsum
          );
        }}
      >
        <h2 className="attractions-title">ATRAÇÕES INTERNACIONAIS</h2>
        <div className="attractions-list">
          <div className="attraction-item" >
            <div className="section" style={{ backgroundColor: '#CD211F' }}>
              <div className="section-content" >
                <div className="image-container">
                  <img
                    src={imageInternational}
                    alt="Imagem da atração"
                    draggable={false}
                  />
                </div>
                <div className="section-description" >
                  <div className="text-container" >
                    <div className="section-text" id="section1-description-id" >
                      <h3 >{nameInternational}</h3>
                      <p>{loremIpsumInternational}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
};

export default HomePage;
