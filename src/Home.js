import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section className="w-3/6 m-auto flex flex-wrap mt-20">
        <div className="flex flex-wrap">
          <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
            <span className="text-gray-300 text-6xl absolute italic right-10">
              01
            </span>
            <h2 className="z-10 relative text-2xl text-gray-900 absolute">
              TAILWIND CSS DEMO
            </h2>
            <hr className="block mb-6 mt-5 w-8 border-red-600 h-0 border-t-2" />
            <p className="text-gray-800">
              Ex Lorem eu voluptate eiusmod culpa aliqua exercitation irure
              minim cillum sit. Incididunt eu aliqua sint eiusmod ex Lorem
              deserunt et veniam adipisicing ea qui. Officia amet dolor sint
              commodo ad est ut reprehenderit sit laboris aute minim et labore.
              Laboris est elit ex ex proident do pariatur dolor non. Consequat
              anim exercitation enim duis consectetur fugiat eu culpa. Occaecat
              sunt ex commodo do magna.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
