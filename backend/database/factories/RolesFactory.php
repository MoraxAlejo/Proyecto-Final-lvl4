<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Roles>
 */
class RolesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'rol' => $this->faker->word, 
            'fechacreacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'fechamodificacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'usuariocreacion' => $this->faker->userName,
            'usuariomodificacion' => $this->faker->userName,
        ];
    }
}
