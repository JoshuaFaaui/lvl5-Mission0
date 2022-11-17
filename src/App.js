import Navbar from './comps/Navbar'
import Search from './comps/Search';
import Footer from './comps/footer';
import { useState } from 'react';
function App() {
  const [coursesOnDisplay, setCoursesOnDisplay] = useState([
    { name: "Hustlers University 1.0", img: 'data:image/jpeg;base64,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' },
    { name: "Hustlers University 2.0", img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUTEhAWFRUVFhUVGBUYFRcVGBcXFhUXGBUWGBgYHSggGRonGxYWITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xABKEAABAwICBgYGCAMGAwkAAAABAAIDBBEFIQYSMUFRYQcTInGBkRQjQlKhsTJicpKissHRNILhCBUzU8LwFiRzNUNEVGOTs7TS/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAgUGAf/EADkRAAIBAgMECAQEBQUAAAAAAAABAgMRBBIxBSFBURMiMmFxgZGxocHR8BQj4fEzQlJiwjRDRGOC/9oADAMBAAIRAxEAPwC8UREAREQBERAEREARFxSytaC5xAA2kmwC8bByrBKjFXpfG19mMLhfNxOqLbyBtPjZdjS97vRg5jiBrNvY2u03AzG65CqPG0nCcoPNl1sSdFK6T3XNxLVMZ9J7W97gF1X45TD/AL9ngb/JVpZZWnltyfCC9X+hZWEXFliO0kpf82/8rv2XEdKqb33fccoAije2q/BR+P1MvwsObJ//AMVU3vO+4V28OxeGckRuuQL2IINuOarVSfQWG8kj7ZBob4uN/wDT8lYwe069atGnJKz5L9TCrh4Ri2TVERdAUwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIi0ekuMGnYA0Xe+9rjIAbTzOYyUdarGlBznoj2MXJ2RtjM0ODS4axFw24uQN4Ci+nMb7RuudTMEbtbaDzyB8uajLK2QSiXWJeDrXO88Dy3Lf6Q6QRzQiNgN3WcSctWxvbmVpKu0KWJw9SMuq+Hfy/VFqNCUJx4kYW0qMckfTCAhuqA0F2dyGkFvIbAq30l08ZETHTASPGRec2N42t9I/DvUAxLG6ickyzPdyvZvg0ZKHB7MxDi25ZFJWfNrwM6laF9LtFz1GKQR/TqIm8nSNB8rrqO0nox/4qP711SKK3HYdJayfwI3i5ci7f+KaP/wA1H5rmhx+lcbNqoieHWNHzKpenw6aQXjhkeOLWOcPgF3maL1hF/RZPFtj5HNYz2Pho61LenzPViZvh7l1tcCLggjiM1YGiNNqUwJ2vJf4bB8BfxXksPqKV9rywuGdu0w+W8KztDemuaENirohNGAGiSMBkjQOLfovGzZqnvU+C2YsPU6TNfduMKtfOrWseg0Wp0e0hpq2LraaZsjcr2yc0nc5pzae9bZbUrhERAEREAREQBERAEREAREQBERAERYKA1uNYq2nj1iLuOTW32nf4BdGomhraVxLg0tGsb7Y3Ab+W3vUVx+vM07neyOy0chv8cytcCubxG1W6so2Thpbn3l2GH6qd7MEKutPdKiSaaB3ZFxI8bzvYDw48dnfvNO9IfRoerjd66QG3FjNhd37h4nco5olowwsE9QL3zZHutuc8b+QWOz8PClD8TW0/lXP74fse1puTyR8yNYbgU9RnFGS33j2W+Z2+C3UWgNQSNaSJo32LiR4av6qwROALNbkMgNgHcvk1J4BT1NqV5PqJJepisPFakRpej5o/xKgnkxtvxEn5KS4bo/SwAatO1xHtv7bu/PZ4WXYFQV22xutctsqVfF15q05bu7d7EsacFojnZOOFlzA3XQXJC4g5Kg4LVEtximGRVMZjmYHDcd7TxadxVU6S6KzUribF8W6QDZyePZPwVyQs1r2I3+NjYhfD2biFbwe0amGeXVcn8jCrRVQo7Asbno52z00pje3eNjhva4bHNPAr0r0a9IEeKRFrgI6mMXkivkRs6yO+Zbc5ja0m2eRNcYporSyk60IaTnrM7B78sie8KM0lPLg1fT1bXa8TZACdhLHAiRjhxLNax2XC6PDY+jX3Lc+TKM6MonqZF16OqZLGySNwcx7Q9rhsLXC4I8CuwrpEEREAREQBERAEREAREQBERAF0q/Eo4dXrHW1jYZctp4DnzXcKr7S2q16ki+TBqDv2u+OXgqWPxX4alnWt7IlpU88rGz0kwWLq3VEbg32iL9l1ztFthz7ioViFY2GJ8rzZrGlx522AcycvFdvrnauprHVvfVubX42UB6Q610skVFFm55a53eTZgPIZuPgufjGGNxCUY5VrL5st3dKDu78iM0GtX12vLmDd7huDG7GDlmB5qwlC+j5o15s8wGDwu6/yCmavbRlerk4JKxHQXVvzCIsqgTHew2D2j4futgV8xMsAOAXWxKWzbDf8gqTvUmS6I4qirbfstvz2BcMFSdYX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' },
    { name: "Hustlers University 3.0", img: 'data:image/png;base64,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' }
  ]);
  return (
    <div className="h-screen">
      <Navbar />
      <Search setCoursesOnDisplay={setCoursesOnDisplay} />
      <hr className='h-1 bg-gray-1'/>
      <Footer coursesOnDisplay={coursesOnDisplay} />
    </div>
  );
}

export default App;
