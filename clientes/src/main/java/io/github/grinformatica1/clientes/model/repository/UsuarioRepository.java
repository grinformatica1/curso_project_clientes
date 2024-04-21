package io.github.grinformatica1.clientes.model.repository;

import io.github.grinformatica1.clientes.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
