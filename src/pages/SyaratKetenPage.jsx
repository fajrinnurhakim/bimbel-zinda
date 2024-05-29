import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../component/FooterComponent copy";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketenuan-page">
      <div className="syarat-ketentuan">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center animate__animated animate__fadeInUp animate__delay-1s mt-2 py-5">Syarat & Ketentuan</h1>
              <p></p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <h3 className="fw-bold">Ketentuan Umum</h3>
              <p> Syarat dan ketentuan ini mengatur landasan dasar dan informasi terkait bimbingan belajar atau belajar mengajar di Bimbel Privat Zinda</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="fw-bold mt-2">Ketentuan Biaya & Pembayaran</h3>
              <p> - Tidak diperkenankan melakukan transaksi langsung dengan tentor</p>
              <p> - Biaya dibayarkan sesuai dengan perjanjian antara pemilik dan siswa</p>
              <p> - Bukti pembayaran dikirim via whatsapp kepada pemilik bimbel</p>
            </Col>
          </Row>
          <Row>
          <Col>
              <h3 className="fw-bold mt-2">Ketentuan Pertemuan</h3>
              <p> - Jumlah pertemuan sesuai dengan perjanjian kedua belah pihak </p>
              <p> - Kelas online atau melalui zoom akan diinformasikan 1 jam sebelum pertemuan dimulai</p>
              <p> - Pertemuan hanya dapat digunakan sesuai dengan bahan materi atau kelas yang diambil saat pendaftaran</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SyaratKetenPage;