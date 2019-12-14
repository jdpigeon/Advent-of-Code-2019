defmodule A2019.P4 do
  @spec run(Range.t()) :: non_neg_integer
  def run(range) do
    range
    |> Stream.map(&Integer.to_string/1)
    |> Stream.map(&String.split(&1, "", trim: true))
    |> Stream.map(fn
      num_string_list -> Enum.map(num_string_list, &String.to_integer/1)
    end)
    |> Stream.filter(fn num_list ->
      Enum.reduce_while(
        num_list,
        0,
        fn
          curr, acc when curr >= acc -> {:cont, curr}
          _, _ -> {:halt, false}
        end
      ) !== false
    end)
    |> Stream.filter(fn [n1, n2, n3, n4, n5, _] = num_list ->
      case num_list do
        [_, ^n1, u3 | _] when u3 != n1 -> true
        [u1, _, ^n2, u4 | _] when u1 != n2 and u4 != n2 -> true
        [_, u2, _, ^n3, u5, _] when u2 != n3 and u5 != n3 -> true
        [_, _, u3, _, ^n4, u6] when u3 != n4 and u6 != n4 -> true
        [_, _, _, u4, _, ^n5] when u4 != n5 -> true
        _ -> false
      end
    end)
    |> Enum.count()
  end
end
